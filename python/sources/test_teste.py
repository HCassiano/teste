import unittest
import lib

class TestTeste(unittest.TestCase):
    """
    Test the add function from the lib library
    """

    def test_power_one(self):

        result = lib.power(1, 2)
        self.assertEqual(result, 1)

    def test_neg_base(self):

        result = lib.power(-1, 2)
        self.assertEqual(result, 1)

    def test_zero_base(self):

        result = lib.power(0, 2)
        self.assertEqual(result, 0)

    def test_usual_case(self):

        result = lib.power(2, 3)
        self.assertEqual(result, 8)

if __name__ == '__main__':
    unittest.main()