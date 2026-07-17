const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'Dart']
  },
  {
    title: 'Frameworks',
    skills: ['Angular', 'Express', 'AdonisJS', 'Laravel']
  },
  {
    title: 'Tools & DB',
    skills: ['MySQL', 'Git', 'Docker', 'Kubernetes']
  }
]

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Fresh Graduate Full Stack Developer.
        Passionate about building scalable, reliable, and well-structured
        web applications from front-end to back-end.
        Committed to writing clean, maintainable code across the entire stack
        while ensuring seamless deployment through modern DevOps practices.
      </p>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
