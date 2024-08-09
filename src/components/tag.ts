import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTagElement } from '@aracna/icons-feather-web/elements/tag-element'

export const IconFeatherTag: ElementComponent<IconFeatherTagElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTagElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-tag', IconFeatherTagElement)
