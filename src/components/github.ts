import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGithubElement } from '@aracna/icons-feather-web/elements/github-element'

export const IconFeatherGithub: ElementComponent<IconFeatherGithubElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGithubElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-github', IconFeatherGithubElement)
