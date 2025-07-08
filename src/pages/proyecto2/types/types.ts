export interface ThankYouProps {
  rating: number;
  onReset: () => void;
}

export interface RatingButtonProps {
  value: number;
  onClick: () => void;
  isSelected: boolean;
  isHighlighted: boolean;
}
