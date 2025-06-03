// import React, { Suspense, useMemo } from "react";
// import { iconsList, IconKey } from "../../../styles/iconsList";
// import { IconComponent } from "../../atoms";
// import { IconComponentProps } from "../../atoms/IconComponent";

// interface DynamicIconProps {
//   icon: IconKey;
//   propsIcon?: React.ComponentProps<any>;
//   propsIconContainer?: Partial<IconComponentProps>;
// }

// export const DynamicIcon: React.FC<DynamicIconProps> = ({
//   icon,
//   propsIcon,
//   propsIconContainer,
// }) => {
//   const loader = iconsList[icon];

//   // const LazyIcon = React.lazy(loader);
//   // Memoizamos la creación de LazyIcon para que no cambie a menos que cambie `loader` (i.e. que el icon key cambie).
//   const LazyIcon = useMemo(() => React.lazy(loader), [loader]);

//   if (!loader) {
//     console.warn(`Icon loader for "${icon}" not found`);
//     return <span>❓</span>;
//   }

//   return (
//     <Suspense
//       fallback={
//         <span
//           style={{
//             width: propsIcon?.size || "24px",
//             height: propsIcon?.size || "24px",
//             display: "inline-block",
//           }}
//         >
//           ...
//         </span>
//       }
//     >
//       <IconComponent
//         size={propsIconContainer?.size}
//         title={propsIconContainer?.title}
//         ariaHidden={propsIconContainer?.ariaHidden}
//       >
//         <LazyIcon {...propsIcon} />
//       </IconComponent>
//     </Suspense>
//   );
// };
