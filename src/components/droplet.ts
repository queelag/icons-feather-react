import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDropletElement } from '@aracna/icons-feather-web/elements/droplet-element'

export const IconFeatherDroplet: ElementComponent<IconFeatherDropletElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDropletElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-droplet', IconFeatherDropletElement)
