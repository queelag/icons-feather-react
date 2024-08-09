import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFileTextElement } from '@aracna/icons-feather-web/elements/file-text-element'

export const IconFeatherFileText: ElementComponent<IconFeatherFileTextElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFileTextElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-file-text', IconFeatherFileTextElement)
