import unittest
from app.models import User

class UserModelCase(unittest.TestCase):
    def test_user_creation(self):
        user = User(username='testuser', email='test@example.com')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'test@example.com')