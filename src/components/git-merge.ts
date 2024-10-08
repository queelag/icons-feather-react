import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGitMergeElement } from '@aracna/icons-feather-web/elements/git-merge-element'

export const IconFeatherGitMerge: ElementComponent<IconFeatherGitMergeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitMergeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-git-merge', IconFeatherGitMergeElement)
