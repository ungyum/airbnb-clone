"use client"; // 다른 client component에서 import 하기 위해서는 client component임을 명시해줘야 함.
// 왜냐하면 next-app은 default가 server component이기 때문에

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
      mx-auto
      max-w-[2520px]
      px-4
      sm:px-2
      md:px-10
      xl:px-20"
    >
      {children}
    </div>
  );
};

export default Container;
