import Pusher from "pusher-js";
import { randomBytes } from "crypto";
import { useEffect } from "react";
import { useChannelStore } from "../../store/Pusher";

export const PusherChannel = () => {
  const loadChannel = useChannelStore((state) => state.loadChannel);

  useEffect(() => {
    Pusher.logToConsole = true;
    const id = randomBytes(16).toString("hex");
    const pusher = new Pusher("6242588775de64bbb5e4", {
      cluster: "eu",
    });
    const channel = pusher.subscribe(id);
    loadChannel({ channel, id });
    return () => {
      pusher.unsubscribe(id);
    };
  }, []);

  return <></>;
};
