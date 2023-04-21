import { Container, Col, Row } from 'react-bootstrap';
import Image from 'next/image'

const WorkFlow = () => {
  return (
    <Container>
      <div className="workflow">
        <h2>Workflow</h2>
              <Row>
                <Col md={{ span: 2}}>
                  <h3>User Needs</h3>
                  <p>
                  Create a brief with the  client to uncover goals for the project.
                  </p>
                  {'\n'}
                  <p>
                  Communicate with the client about the needs of the user.
                  </p>
                  {'\n'}
                  <p>
                  Draft an outline to determine milestones that align with the goals and fit within the budget, deadline and technical resources.
                  </p>
                </Col>
                <Col md={{ span: 2}}>
                  <h3>Brainstorming</h3>
                  <p>
                    Explore the needs and wants of the user.
                  </p>
                  {'\n'}
                  <p>
                    Research competitors in the market.
                  </p>
                  {'\n'}
                  <p>
                    Gather resources to carry out the project.
                  </p>
                  {'\n'}
                  <p>
                    Sketch out rough ideas
                  </p>
                </Col>
                <Col md={{ span: 2}}>
                  <h3>UX Design</h3>
                  <p>
                    Break down the brief into smaller, actionable goals.
                  </p>
                  {'\n'}
                  <p>
                    Research established UX patterns for achieving a similar goal.
                  </p>
                  {'\n'}
                  <p>
                    Building personas around each type of user.
                  </p>
                  {'\n'}
                  <p>
                    Create user flows to determine how to complete each goal in the least amount of steps.
                  </p>
                  {'\n'}
                  <p>
                    Break down the user flows into a system of interconnected components.
                  </p>
                  {'\n'}
                  <p>
                    Develops wireframes based on the components.
                  </p>
                  {'\n'}
                  <p>
                    Determine various states for each wireframe e.g. empty filled, logged in, error etc
                  </p>
                </Col>
                <Col md={{ span: 2}}>
                  <h3>UI Design</h3>
                  <p>
                    Explore visual design patterns.
                  </p>
                  {'\n'}
                  <p>
                    Research framework and/or guidelines if necessary.
                  </p>
                  {'\n'}
                  <p>
                    Experiment with different styles, colours and typography most suited to the needs.
                  </p>
                  {'\n'}
                  <p>
                    Transform the wireframes into high fidelity mockups.
                  </p>
                  {'\n'}
                  <p>
                    Collaborate with developers to determine any technical constraints related to the visuals.
                  </p>
                  {'\n'}
                  <p>
                    Generate a consistent UI kit for reusable components.
                  </p>
                </Col>
                  <Col md={{ span: 2}}>
                  <h3>Prototyping</h3>
                  <p>
                  Determine the start, processing and end state for each action.
                  </p>
                  {'\n'}
                  <p>
                  Build interactive prototypes for the client to demonstrate motion, feedback, state and context.
                  </p>
                  {'\n'}
                  <p>
                  Collaborate with developers to determine any technical constraints related to the visuals.
                  </p>
                  {'\n'}
                  <p>
                  Animate visual components such as logos for intro screens and pre-loaders.
                  </p>
                </Col>
                <Col md={{ span: 2}}>
                  <h3>Testing</h3>
                  <p>
                  Finalise assets for handover to developers.
                  </p>
                  {'\n'}
                  <p>
                  Ensure visuals are accessible, on-brand and within cultural boundaries.
                  </p>
                  {'\n'}
                  <p>
                  Determine whether the visuals are adaptable at various sizes.
                  </p>
                  {'\n'}
                  <p>
                  Collaborate with developers to determine any technical constraints related to the visuals.
                  </p>
                </Col>
              </Row>
          <img src="/infinity.svg"
            alt="infinity icon" className="workflow__bg-image" />
      </div>
    </Container>
  )
}

export default WorkFlow
