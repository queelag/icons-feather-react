import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGithubElement } from '@aracna/icons-feather-web/elements/github-element'

export const IconFeatherGithub: ElementComponent<IconFeatherGithubElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGithubElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-github', IconFeatherGithubElement)
