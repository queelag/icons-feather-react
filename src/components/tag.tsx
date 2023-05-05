import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTagElement } from '@aracna/icons-feather-web/elements/tag-element.js'

export const IconFeatherTag: ElementComponent<IconFeatherTagElement, IconProps> = createBaseElementComponent<
  IconFeatherTagElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-tag', IconFeatherTagElement)
