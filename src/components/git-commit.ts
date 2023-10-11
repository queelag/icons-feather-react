import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitCommitElement } from '@aracna/icons-feather-web/elements/git-commit-element'

export const IconFeatherGitCommit: ElementComponent<IconFeatherGitCommitElement, IconProps> = createBaseElementComponent<
  IconFeatherGitCommitElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-git-commit', IconFeatherGitCommitElement)
