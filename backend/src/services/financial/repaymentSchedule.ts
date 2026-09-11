export interface RepaymentScheduleInput {
  principal: number;
  annualInterestRate: number;
  tenureYears: number;
  moratoriumMonths: number;
  startDate?: Date;
}

export interface RepaymentInstallment {
  installmentNumber: number;
  dueDate: Date;
  principalAmount: number;
  interestAmount: number;
  totalPayment: number;
  remainingBalance: number;
}

export function generateRepaymentSchedule(
  input: RepaymentScheduleInput
): RepaymentInstallment[] {
  const {
    principal,
    annualInterestRate,
    tenureYears,
    moratoriumMonths,
    startDate = new Date(),
  } = input;

  if (principal <= 0) {
    throw new Error("Principal must be greater than zero");
  }

  const totalMonths = tenureYears * 12;
  const monthlyRate = annualInterestRate / 100 / 12;

  const repaymentMonths = totalMonths - moratoriumMonths;

  if (repaymentMonths <= 0) {
    throw new Error("Moratorium cannot exceed loan tenure");
  }

  let emi: number;

  if (monthlyRate === 0) {
    emi = principal / repaymentMonths;
  } else {
    emi =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, repaymentMonths)) /
      (Math.pow(1 + monthlyRate, repaymentMonths) - 1);
  }

  let balance = principal;
  const schedule: RepaymentInstallment[] = [];

  // Moratorium period
  for (let month = 1; month <= moratoriumMonths; month++) {
    const interest = balance * monthlyRate;

    const dueDate = new Date(startDate);
    dueDate.setMonth(dueDate.getMonth() + month);

    schedule.push({
      installmentNumber: month,
      dueDate,
      principalAmount: 0,
      interestAmount: Number(interest.toFixed(2)),
      totalPayment: Number(interest.toFixed(2)),
      remainingBalance: Number(balance.toFixed(2)),
    });
  }

  // Regular repayment period
  for (
    let month = moratoriumMonths + 1;
    month <= totalMonths;
    month++
  ) {
    const interest = balance * monthlyRate;

    let principalPayment = emi - interest;

    // Prevent floating-point errors in final installment
    if (month === totalMonths) {
      principalPayment = balance;
    }

    const totalPayment = principalPayment + interest;

    balance -= principalPayment;

    if (balance < 0.01) {
      balance = 0;
    }

    const dueDate = new Date(startDate);
    dueDate.setMonth(dueDate.getMonth() + month);

    schedule.push({
      installmentNumber: month,
      dueDate,
      principalAmount: Number(principalPayment.toFixed(2)),
      interestAmount: Number(interest.toFixed(2)),
      totalPayment: Number(totalPayment.toFixed(2)),
      remainingBalance: Number(balance.toFixed(2)),
    });
  }

  return schedule;
}