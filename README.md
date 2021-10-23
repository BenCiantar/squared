
<h1>#squared</h1>
<h3>Squared Online Shape Calculator - Hyper Island Project 1</h3>

Brief: Solo project to create a website that features HTML, CSS and Javascript, and is responsive.

Timeframe: six weeks.

Description: Squared is an online tool that allows the user to select a shape and input the required value (usually the length of one or two sides, depending on the shape). The tool will then calculate the area and perimeter of the shape, converting between mm, cm, m, and km depending on user selection.

Key Learnings:

    Functions:
      Main shape display populated by list of shapes pulled from JSON data file.
      Working calculator to calculate area and perimeter for all listed shapes based on user input.
      Conversion formulas to allow user to change and convert units of measurement
      Filter shape list by number of sides

    Responsiveness:
      Collapsible nav menu replaced by hamburger menu below certain screen width.
      Media query for responsive design - different layouts for small and large screens.
      % scaling on all elements to allow full function at any ratio.
                
    Style/Animation:
      Simple animated details (on hover text highlighting, scaling up icons etc.)
      Animated hamburger menu transition and hamburger icon.
      SVG icon array created in Figma for use with SVG Morpheus transitions between active shape.
      Scaling and highlight animation when a shape is active.
      Intersection observer to animate shapes as they scroll into view.
      Use of an installed custom font as well as an imported Google font.

    Workflow:
      Main project hosted on Github.
      All styling done in SCSS.
      Followed basic SEO conventions.
      Scalability - the site was designed to allow for the addition of new shapes as well as additional calculators in the future.
