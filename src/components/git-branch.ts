import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGitBranchElement } from '@aracna/icons-feather-web/elements/git-branch-element'

export const IconFeatherGitBranch: ElementComponent<IconFeatherGitBranchElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitBranchElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-git-branch', IconFeatherGitBranchElement)
