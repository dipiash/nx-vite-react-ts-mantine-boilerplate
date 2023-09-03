export interface PaginationPropertiesInterface {
  onPrevClick: () => void | Promise<void>
  onNextClick: () => void | Promise<void>
  isPrevDisabled: boolean
  isNextDisabled: boolean
}
