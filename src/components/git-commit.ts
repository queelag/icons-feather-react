import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGitCommitElement } from '@aracna/icons-feather-web/elements/git-commit-element'

export const IconFeatherGitCommit: ElementComponent<IconFeatherGitCommitElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitCommitElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-git-commit', IconFeatherGitCommitElement)
