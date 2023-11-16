import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitCommitElement } from '@aracna/icons-feather-web/elements/git-commit-element'

export const IconFeatherGitCommit: ElementComponent<IconFeatherGitCommitElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitCommitElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-git-commit', IconFeatherGitCommitElement)
