import crypto from 'crypto-browserify';
import URLSafeBase64 from 'urlsafe-base64';

export default function handler(req, res) {
  try {
    const profileCode = process.env.GATSBY_PAYCEK_PROFILE_CODE;
    const secretKey = process.env.GATSBY_PAYCEK_SECRET_KEY;

    // Validate credentials
    if (!profileCode || !secretKey) {
      throw new Error('Missing PayCek credentials');
    }

    // Generate unique payment ID
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const paymentId = `PAY_${timestamp}_${random}`;

    // Create payment data with required fields
    const paymentData = {
      'id': paymentId,        // Unique ID for each transaction
      'p': '1000',           // Amount as string
      't': '1000'           // Amount as string
    };

    console.log('Payment data:', paymentData);

    // Convert to JSON and encode
    const dataJson = JSON.stringify(paymentData);
    const dataBytes = Buffer.from(dataJson, 'utf-8');
    const dataB64 = URLSafeBase64.encode(dataBytes);

    // Create hash
    const sha256 = crypto.createHash('sha256');
    sha256.update(dataB64);
    sha256.update(`\x00`);
    sha256.update(Buffer.from(profileCode, 'utf-8'));
    sha256.update(`\x00`);
    sha256.update(Buffer.from(secretKey, 'utf-8'));

    const dataHash = URLSafeBase64.encode(sha256.digest());

    // Generate final URL
    const url = `https://paycek.io/processing/checkout/payment_create?d=${dataB64}&c=${profileCode}&h=${dataHash}`;

    return res.status(200).json({
      url,
      debug: {
        paymentId,
        paymentData
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      error: error.message
    });
  }
}
