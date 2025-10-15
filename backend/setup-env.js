import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create .env file with default values
const envContent = `# Email Configuration
EMAIL_USER=infomymsca@gmail.com
EMAIL_PASS=xuslckajvntlsvyx

# Server Configuration
PORT=5000
NODE_ENV=development
`;

const envPath = path.join(__dirname, '.env');

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!');
  console.log('📝 Please update EMAIL_PASS with your Gmail app password');
} else {
  console.log('⚠️  .env file already exists');
}
