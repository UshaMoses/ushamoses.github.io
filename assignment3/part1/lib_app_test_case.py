from datetime import datetime

class BookLoan:
    def __init__(self, title, author, year, availability, checkout_date,
                 estimated_return_date, returned_date):
        self.title = title
        self.author = author
        self.year = int(year)
        self.availability = availability.lower()
        self.checkout_date = self._parse_date(checkout_date)
        self.estimated_return_date = self._parse_date(estimated_return_date)
        self.returned_date = self._parse_date(returned_date) if returned_date else None

    def _parse_date(self, date_str):
        return datetime.strptime(date_str.strip(), "%d.%m.%Y")

    def calculate_return_status_and_fee(self):
        if not self.returned_date:
            return "Not returned", "$50"

        days_late = (self.returned_date - self.estimated_return_date).days

        if days_late <= 0:
            return "Returned on time", "No fee"
        elif days_late <= 14:
            return "Late return", f"${min(days_late, 15)}"
        else:
            return "Not returned", "$50"


def run_tests():
    test_cases = [
        # title, author, year, availability, checkout, estimated, returned, expected_status, expected_fee
        ("IT", "USHA", 2024, "AVAILABLE", "1.8.2025", "7.8.2025", "3.8.2025", "Returned on time", "No fee"),
        ("IT", "USHA", 2024, "AVAILABLE", "1.8.2025", "7.8.2025", "6.8.2025", "Returned on time", "No fee"),
        ("IT", "USHA", 2024, "AVAILABLE", "1.8.2025", "7.8.2025", "7.8.2025", "Returned on time", "No fee"),
        ("IT", "USHA", 2024, "UNAVAILABLE", "1.8.2025", "7.8.2025", "8.8.2025", "Late return", "$1"),
        ("IT", "USHA", 2024, "UNAVAILABLE", "1.8.2025", "7.8.2025", "9.8.2025", "Late return", "$2"),
        ("IT", "USHA", 2024, "UNAVAILABLE", "1.8.2025", "7.8.2025", "15.8.2025", "Late return", "$7"),
        ("IT", "USHA", 2024, "UNAVAILABLE", "1.8.2025", "7.8.2025", "21.8.2025", "Late return", "$14"),
        ("IT", "USHA", 2024, "UNAVAILABLE", "1.8.2025", "7.8.2025", "22.8.2025", "Late return", "$15"),
        ("IT", "USHA", 2024, "UNAVAILABLE", "1.8.2025", "7.8.2025", "23.8.2025", "Not returned", "$50"),
        ("IT", "USHA", 2024, "UNAVAILABLE", "1.8.2025", "7.8.2025", "25.8.2025", "Not returned", "$50"),
    ]

    for i, case in enumerate(test_cases, start=1):
        title, author, year, avail, co_date, est_date, ret_date, exp_status, exp_fee = case
        loan = BookLoan(title, author, year, avail, co_date, est_date, ret_date)
        actual_status, actual_fee = loan.calculate_return_status_and_fee()

        passed = actual_status == exp_status and actual_fee == exp_fee
        print(f"Test case {i}: {'✅ Passed' if passed else '❌ Failed'}")
        if not passed:
            print(f"  Expected: {exp_status}, {exp_fee}")
            print(f"  Got:      {actual_status}, {actual_fee}")

run_tests()