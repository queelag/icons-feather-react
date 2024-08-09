import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherExternalLinkElement } from '@aracna/icons-feather-web/elements/external-link-element'

export const IconFeatherExternalLink: ElementComponent<IconFeatherExternalLinkElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherExternalLinkElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-external-link', IconFeatherExternalLinkElement)
