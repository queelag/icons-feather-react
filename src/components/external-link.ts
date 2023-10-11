import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherExternalLinkElement } from '@aracna/icons-feather-web/elements/external-link-element'

export const IconFeatherExternalLink: ElementComponent<IconFeatherExternalLinkElement, IconProps> = createBaseElementComponent<
  IconFeatherExternalLinkElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-external-link', IconFeatherExternalLinkElement)
