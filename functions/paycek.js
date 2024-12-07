const crypto = require('crypto');
const URLSafeBase64 = require('urlsafe-base64');

exports.handler = async function(event, context) {
  try {
    const profileCode = process.env.GATSBY_PAYCEK_PROFILE_CODE;
    const secretKey = process.env.GATSBY_PAYCEK_SECRET_KEY;

    // Validate credentials
    if (!profileCode || !secretKey) {
      throw new Error('Missing PayCek credentials');
    }

    // Rest of your existing code...
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const paymentId = `PAY_${timestamp}_${random}`;

    const paymentData = {
      'id': paymentId,
      'p': '1000',
      't': '1000'
    };

    const dataJson = JSON.stringify(paymentData);
    const dataBytes = Buffer.from(dataJson, 'utf-8');
    const dataB64 = URLSafeBase64.encode(dataBytes);

    const sha256 = crypto.createHash('sha256');
    sha256.update(dataB64);
    sha256.update(`\x00`);
    sha256.update(Buffer.from(profileCode, 'utf-8'));
    sha256.update(`\x00`);
    sha256.update(Buffer.from(secretKey, 'utf-8'));

    const dataHash = URLSafeBase64.encode(sha256.digest());

    const url = `https://paycek.io/processing/checkout/payment_create?d=${dataB64}&c=${profileCode}&h=${dataHash}`;

    return {
      statusCode: 200,
      body: JSON.stringify({
        url,
        debug: {
          paymentId,
          paymentData
        }
      })
    };

  } catch (error) {
    console.error('API Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};