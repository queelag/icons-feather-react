import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDropletElement } from '@aracna/icons-feather-web/elements/droplet-element.js'

export const IconFeatherDroplet: ElementComponent<IconFeatherDropletElement, IconProps> = createBaseElementComponent<
  IconFeatherDropletElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-droplet', IconFeatherDropletElement)
