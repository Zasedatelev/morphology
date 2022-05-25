from muscle_mass import sum_of_girths


class TestMuscleMass:

    def test_sum_of_girths(self):
        assert sum_of_girths(34.5, 27, 59, 37) == 157.5
