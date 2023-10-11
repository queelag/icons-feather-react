import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLinkElement } from '@aracna/icons-feather-web/elements/link-element'

export const IconFeatherLink: ElementComponent<IconFeatherLinkElement, IconProps> = createBaseElementComponent<
  IconFeatherLinkElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-link', IconFeatherLinkElement)
