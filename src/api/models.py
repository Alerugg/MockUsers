from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    street = db.Column(db.String(80), nullable=False)
    city = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), nullable=False)  # Changed to String
    identification = db.Column(db.String(80), nullable=False)
    birthday = db.Column(db.Date(), nullable=False)  # Removed unique=True
    birth_country = db.Column(db.String(80), nullable=False)
    password = db.Column(db.String(80), nullable=False)  # Store securely in production

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "address": {
                "street": self.street,
                "city": self.city,
                "country": self.country
            },
            "phone": self.phone,
            "identification": self.identification,
            "birthday": self.birthday.strftime('%Y-%m-%d') if self.birthday else None,
            "birth_country": self.birth_country,
            "password": self.password,  # Only mock; do not expose passwords in production
        }
