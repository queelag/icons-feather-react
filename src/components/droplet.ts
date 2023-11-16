import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDropletElement } from '@aracna/icons-feather-web/elements/droplet-element'

export const IconFeatherDroplet: ElementComponent<IconFeatherDropletElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDropletElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-droplet', IconFeatherDropletElement)
