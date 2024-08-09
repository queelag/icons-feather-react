import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFileElement } from '@aracna/icons-feather-web/elements/file-element'

export const IconFeatherFile: ElementComponent<IconFeatherFileElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFileElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-file', IconFeatherFileElement)
