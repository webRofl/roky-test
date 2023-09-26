export const getPrettyDate = (date: string) => {
  const dateObj = new Date(date);

  const yearMonthDayOptions = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const yearMonthDay = new Intl.DateTimeFormat("en-GB", yearMonthDayOptions).format(dateObj);

  const hourMinuteSecondOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' } as const;
  const hourMinuteSecond = new Intl.DateTimeFormat("en-US", hourMinuteSecondOptions).format(dateObj);

  return yearMonthDay + ', ' + hourMinuteSecond;
};
