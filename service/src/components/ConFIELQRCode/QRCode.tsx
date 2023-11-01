import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { QR_CODE_STYLING_OPTS } from "../../constants/qrcode";

const qrCode = new QRCodeStyling(QR_CODE_STYLING_OPTS);

export const QRCode = ({
  payload = "https://app.confiel.id",
}: {
  payload: string;
}) => {
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: payload,
    });
  }, [payload]);

  return <><div ref={ref} /></>;
};
