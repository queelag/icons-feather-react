import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherExternalLinkElement } from '@aracna/icons-feather-web/elements/external-link-element'

export const IconFeatherExternalLink: ElementComponent<IconFeatherExternalLinkElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherExternalLinkElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-external-link', IconFeatherExternalLinkElement)
