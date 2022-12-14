import { Timeline, TIMELINE_POSITION } from "./components/timeline";
import { TimelineConnector } from "./components/timeline/timelineConnector";
import { TimelineContent } from "./components/timeline/timelineContent";
import { TimelineDot } from "./components/timeline/timelineDot";
import { TimelineItem } from "./components/timeline/timelineItem";
import { TimelineSeparator } from "./components/timeline/timelineSeparator";

function App() {
  return (
    <div className="App">
      <Timeline position={TIMELINE_POSITION.RIGHT}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Hello</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Hello</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default App;
