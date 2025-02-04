import techBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import techBackground from '~/assets/uses-page/tech-gym-bro.gif';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './tech-stack.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Tech Stack',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const TechStack = () => {
  return (
    <>
      <ProjectContainer className={styles.TechStack}>
        <ProjectBackground
          src={techBackground}
          placeholder={techBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Tech Stack"
          description="A farily comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design, code and create things. And yes, the background GIF was generated by Sora."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> has been my primary tool for
                    UI design for a while. The first time I used it for a university course 
                    to create a prototype and I was in AWE exploring the potential it housed. The prototype 
                    is <Link href="https://youtu.be/b8dYC4TXDLQ">showcased</Link> on 
                    my <Link href="https://www.youtube.com/@PiratedSardar">YouTube channel</Link>.
                  </ListItem>
                  <ListItem>
                    I've dabbled with{' '}
                    <Link href="https://www.adobe.com/ca/products/aftereffects.html">Adobe After Effects</Link>{' '}
                    to create motion graphics. My university has a free license for machines on 
                    campus, but I'd like to find a cheaper/free alternative by the time I graduate.
                  </ListItem>
                  <ListItem>
                    I'm learning to use <Link href="https://www.blender.org/">Blender</Link>{' '}
                    for 3D modelling. While my university has licenses for more expensive 
                    tools like 3DS and Maya, the simplicity Blender offers is alluring. Plus 
                    I think it's better even though it's free.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://code.visualstudio.com/">Visual Studio Code</Link> as
                    my primary text editor. In dark theme, of course.
                  </ListItem>
                  <ListItem>
                    I have recently started using <Link href="https://www.cursor.com/">Cursor AI</Link> and
                    {' '}<Link href="https://codeium.com/windsurf">Windsurf Editors</Link> in 
                    addition to VS Code to integrate AI into some parts of development.
                  </ListItem>
                  <ListItem>
                    My browser of choice for development and general use is
                    {' '}<Link href="https://thebrowser.company/">Arc by The Browser Company.</Link>{' '}
                    However, I still use 
                    {' '}<Link href="https://sindresorhus.com/velja">Velja</Link> for niche web directing
                    between Chrome, Safari, and Firefox.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. As I'm primarily a software developer, 
                    the component-centric model took a little while to grasp, but 
                    if you're reading this, I probably figured it out.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">Three.js</Link>. I'm still getting 
                    used to it, but you can do some truly powerful stuff with it.
                  </ListItem>
                  <ListItem>
                    For CSS I have used a range of pre-processors and css-in-js solutions like
                    styled-components, but these days I’m using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> to get upcoming CSS
                    features today.
                  </ListItem>
                  <ListItem>
                    I have used <Link href="https://getbootstrap.com/">Bootstrap</Link>{' '}
                    and <Link href="https://tailwindcss.com/">Tailwind</Link> for a{' '}
                    <Link href="https://the-pirated-sardar.github.io/portfolio-2024">static version</Link>{' '}
                    of my portfolio website in the past, but it was time to get more custom, so I moved on.
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>. It's a 
                    great way to add a little oomph on top of React and Three.js with spring animations.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Creativity and Video Creation</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                <ListItem>
                    I exclusively 
                    use <Link href="https://www.blackmagicdesign.com/ca/products/davinciresolve">DaVinci Resolve</Link> for 
                    editing videos. It offers an extensive range of professional grade 
                    editing features for free, which have been a godsend. 
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://www.canva.com/">Canva</Link> for designing thumbnails
                    and some light prototyping visualization. I intend to start using{" "}
                    <Link href="https://www.adobe.com/ca/products/photoshop.html">PhotoShop</Link>{" "}
                    at some point though.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://www.audacityteam.org/">Audacity</Link> for audio 
                    capturing and treatment. Free, open source, and timeless.
                  </ListItem>
                  <ListItem>
                    I almost exclusively create longform videos in my free time to publish on{" "}
                    <Link href="https://www.youtube.com/@PiratedSardar">YouTube</Link>,{" "}
                    but I have reuploaded some YT shorts on TikTok. Most of the content is my take on technology.
                  </ListItem>
                  <ListItem>
                    I write (infrequently) on{" "}
                    <Link href="https://piratedsardar.substack.com/publish/home">Substack</Link>
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Primary Machine</TableHeadCell>
                    <TableCell>MacBook Pro M1 (14")</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>macOS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Arc Browser</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>2160p IPS 60Hz LG 27UP650 (x2)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Apple Magic Keyboard w/ Num Pad</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech MX Master 3 (& Apple Magic Trackpad)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>On-the-go "computer"</TableHeadCell>
                    <TableCell>iPad Air M2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Apple Airpods Pro 2 & Soundcore Space One</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
