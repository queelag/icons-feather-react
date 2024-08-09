import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDeleteElement } from '@aracna/icons-feather-web/elements/delete-element'

export const IconFeatherDelete: ElementComponent<IconFeatherDeleteElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDeleteElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-delete', IconFeatherDeleteElement)
