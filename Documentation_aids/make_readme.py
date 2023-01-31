#!/usr/bin/env python3
"""Module containing functions for creating a README.md file for Zanbato"""


def get_info() -> tuple:
    """Gets input from the user to fill out README_TEMPLATE.md"""
    name = input("Your Name: ")
    git_hub = input("Github Profile Name: ")
    title = input("Title: ")
    sections_dict = {}
    get_sections(sections_dict)

    return (name, git_hub, title, sections_dict)

def get_sections(sections_dict: dict) -> None:
    first_section = input("First Section: ")
    first_sub_sections = get_sub_sections()
    while True:
        double_check = input(
            f'Create "{first_section}" with '
            + (f'subsections: {", ".join(first_sub_sections)}' if len(first_sub_sections) else 'no subsections')
            + " y/n: "
        )
        if double_check == "y":
            sections_dict[first_section] = first_sub_sections
            print(f'Section {first_section} created.')
            break
        if double_check == "n":
            print(f'Section {first_section} was not created.')

    while True:
        add_section = ""
        while add_section != "y" and add_section != "n":
            add_section = input("Would you like to add another section? y/n: ").lower()
        if add_section == "y":
            new_section = input("Section Name: ")
            confirm_section = ""
            while confirm_section != "y" and confirm_section != "n":
                confirm_section = input(f'Add section "{new_section}"? y/n: ')
            if confirm_section == "y":
                sub_sections = get_sub_sections()
                while True:
                    final_check = input(
                        f'Create "{new_section}" with '
                        + (f'subsections {",".join(sub_sections)}' if len(sub_sections) else 'no subsections')
                        + " y/n: "
                    )
                    if final_check == "y":
                        sections_dict[new_section] = sub_sections
                        print(f'Section "{new_section}" created.')
                        break
                    if final_check == "n":
                        print(f'Section "{new_section}" was not created.')
            else:
                continue
        else:
            break
    return

def get_sub_sections() -> list:
    sub_sections = []
    add_sub_section = ""

    while add_sub_section != "n":
        add_sub_section = input(f'Add sub-sections? y/n: ')
        if add_sub_section == "y":
            while True:
                new_sub_sections = input("Add Sub-section Names separated by commas:")
                confirm_sub_section = input(f'Add sub sections "{new_sub_sections}"? y/n: ')
                if confirm_sub_section == "y":
                    sub_sections = new_sub_sections.split(",")
                    sub_sections = [each.strip() for each in sub_sections if each.strip()]
                    print(f'Sub sections "{new_sub_sections}" added.')
                    break
                if confirm_sub_section == "n":
                    print(f'Sub sections not added.')
                    if input('Stop adding subsections? y/n: ') == "y":
                        break
                    else:
                        continue
            break

    return sub_sections

def create_readme(name: str, git_hub: str, title: str, sections_dict: dict) -> None:
    """Creates a README.md Template for the base directory of an app."""
    back_to_the_top = f'\n\n##### [Back to top](#{title.lower().replace(" ", "_")})\n------\n'

    title_section = f'# {title.title()}\nSummary\n\n------\n'

    table_of_contents = f'## *Table of Contents*\n\n'

    for section in sections_dict:
        table_of_contents += f'  * [{section.title()}](#{section.lower().replace(" ", "_")})\n'
        for sub_section in sections_dict[section]:
            table_of_contents += f'    * [{sub_section.title()}](#{sub_section.lower().replace(" ", "_")})\n'

    table_of_contents += f'  * [Glossary](#glossary)\n  * [Contributors](#contributors)\n\n'
    table_of_contents += """Optional/Suggested Sections: How To Install, How To Run Program,
      Motivation, Associated Jira ticket or pull request, Tests, API,
      Models, Serializers, Views, Components, Commands,
      Depreciated/Legacy, Resources, Confluence Docs
"""

    section_contents = f'\n(Optional) Description\n\nSection contents\n\n'
    sub_section_contents = f'\n(Optional) Description\n\nSub-section contents\n\n'
    
    sections = ""
    for section in sections_dict:
        sections += f'## *{section.title()}*\n' + section_contents
        for sub_section in sections_dict[section]:
            sections += f'### *{sub_section.title()}*\n' + sub_section_contents
        sections = sections[:-2] + back_to_the_top

    glossary = f'## *Glossary*\n\n* **Term 1**: Definition.\n* **Term 2**: Definition.\n'

    contributors=f'## *Contributors*\n\n[{name}](https://github.com/{git_hub})\n'

    with open("README_TEMPLATE.md", "w+") as file:
        text = title_section
        body = [x + back_to_the_top if x is not sections else x for x in [
            table_of_contents,
            sections,
            glossary,
            contributors
        ]]

        for each in body:
            text += each

        file.write(text)

    file.close()
    return

def main():
    """Main function of module"""
    # Get info
    name, git_hub, title, sections_dict = get_info()

    # Create and write to README.md file
    create_readme(name, git_hub, title, sections_dict)


if __name__ == "__main__":
    main()
