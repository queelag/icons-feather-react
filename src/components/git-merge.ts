import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitMergeElement } from '@aracna/icons-feather-web/elements/git-merge-element'

export const IconFeatherGitMerge: ElementComponent<IconFeatherGitMergeElement, IconProps> = createBaseElementComponent<
  IconFeatherGitMergeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-git-merge', IconFeatherGitMergeElement)
