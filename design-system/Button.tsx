export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional className overidel
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  className,
  label,
  ...props
}) => {
  const BASE_BUTTON = 'uppercase tracking-wider box-border';
  const PRIMARY_BUTTON = `${BASE_BUTTON} bg-primary-600 border border-primary-600 text-white focus:outline-none focus:bg-primary-900 focus:border-primary-900 hover:bg-primary-900 hover:border-primary-900`;
  const SECONDARY_BUTTON = `${BASE_BUTTON} border bg-white text-primary-600 border-primary-600 text-black focus:outline-none focus:text-primary-900 focus:border-primary-900 hover:border-primary-900 hover:text-primary-900`;

  const SIZE_BUTTON = {
    small: 'rounded-sm text-sm px-2 py-1',
    medium: 'rounded-md text-md px-3 py-2',
    large: 'rounded-lg text-lg px-4 py-3',
  };

  return (
    <button
      type="button"
      className={`${primary ? PRIMARY_BUTTON : SECONDARY_BUTTON} ${SIZE_BUTTON[size]} ${className}`.trim()}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
