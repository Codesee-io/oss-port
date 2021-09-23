export function pluralize(amount: number, singular: string, plural: string) {
  return amount === 1 ? singular : plural;
}
