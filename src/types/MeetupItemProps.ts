import { IMeetup } from "./IMeetup"

export interface MeetupItemProps {
  item?: IMeetup
  onRemoveMeetup?: (id) => void
}
