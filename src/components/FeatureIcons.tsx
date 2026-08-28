type IconProps = {
  className?: string;
};

export function CompaniesIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 20V6a2 2 0 0 1 2-2h6v16H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 20V10h6a2 2 0 0 1 2 2v8h-8Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GroupsIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8.5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M15.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 19c0-3 2.2-5 4.5-5s4.5 2 4.5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13 19c0-2.2 1.7-4 3.8-4 1.4 0 2.7.7 3.4 1.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProductsIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Contorno externo do cubo */}
      <path
        d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      {/* Linhas internas da perspectiva (junção das faces) */}
      <path
        d="M12 22V12M12 12L21 7M12 12L3 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SecurityIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 3 5 6v6c0 4.7 3.1 8.7 7 9 3.9-.3 7-4.3 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m9.5 12 1.9 1.9L15 10.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
