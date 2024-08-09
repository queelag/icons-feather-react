import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGitCommitElement } from '@aracna/icons-feather-web/elements/git-commit-element'

export const IconFeatherGitCommit: ElementComponent<IconFeatherGitCommitElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitCommitElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-git-commit', IconFeatherGitCommitElement)
