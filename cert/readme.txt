1) Generate private key => openssl genrsa -out key.pem
2) Create a CSR using private key => openssl req -new -key key.pem -out csr.pem
3) Generate SSL certificate from CSR => openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem