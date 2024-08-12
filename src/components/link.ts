import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLinkElement } from '@aracna/icons-feather-web/elements/link-element'

export const IconFeatherLink: ElementComponent<IconFeatherLinkElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLinkElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-link', IconFeatherLinkElement)
