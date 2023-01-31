#!/usr/bin/env python3
"""Module containing functions for creating a README.md file for Zanbato"""


def create_readme() -> None:
    """Creates a README.md Template for the base directory of an app
    """
    name = "Benjamin Dosch"
    git_hub = "https://github.com/BenDosch"

    back_to_the_top = "\n\n##### [Back to top](#title)\n------\n"

    title_section = "# Title\nSummary\n\n------\n"

    table_of_contents = """## *Table of Contents*

  * [Section 1](#section-1)
    * [Sub-section 1](#sub-section-1)
    * [Sub-section n](#sub-section-n)
  * [Section n](#section-n)
  * [Glossary](#glossary)
  * [Contributors](#contributors)

  Optional/Suggested Sections: How to install, How to run program,
      Motivation, Associated Jira ticket or pull request, Tests, API,
      Models, Serializers, Views, Components, Commands,
      Depreciated/Legacy, Resources, Confluence docs
"""

    section_example_1 = """## *Section 1*
(Optional) Description

Section contents

### *Sub-section 1*
(Optional) Description

Sub-section contents

### *Sub section n*
(Optional) Description

Sub-section contents
"""

    section_example_2 = """## *Section n*
(Optional) Description

Section contents
"""

    glossary = """## *Glossary*

* **Term 1**: Definition.
* **Term 2**: Definition.
"""

    contributors="""## *Contributors*

[{}]({})
""".format(name, git_hub)

    with open("README_TEMPLATE.md", "w+") as file:
        text = title_section
        sections = [x + back_to_the_top for x in [
            table_of_contents,
            section_example_1,
            section_example_2,
            glossary,
            contributors
        ]]


        for each in sections:
            text += each

        file.write(text)

    file.close()
    return

def main():
    """Main file of module
    """
    # directory = os.getcwd()

    # Create and write to README.md file
    create_readme()


if __name__ == "__main__":
    main()
