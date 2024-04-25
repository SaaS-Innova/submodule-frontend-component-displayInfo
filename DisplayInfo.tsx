import { IDisplayInfo } from "./displayInfo.model";


export const DisplayInfo = (props: IDisplayInfo) => {
  const { infoData, children } = props;
  return (
    <table className="line-height-2 surface-100 display-info w-full display-info-table">
      <tbody>
        {Object.entries(infoData).map(([key, value]: any, index) => {
          return (
            <tr key={index}>
              <td className="p-1 font-semibold capitalize text-900 w-6">
                {key}:
              </td>
              <td className="p-1 capitalize w-6"> {value}</td>
            </tr>
          );
        })}
        {children}
      </tbody>
    </table>
  );
};
