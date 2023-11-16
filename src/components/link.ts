import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLinkElement } from '@aracna/icons-feather-web/elements/link-element'

export const IconFeatherLink: ElementComponent<IconFeatherLinkElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLinkElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-link', IconFeatherLinkElement)
